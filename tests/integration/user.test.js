import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';

import app from '../../src/index';

describe('User APIs Test', () => {
  var token;
  
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => {});
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  });

  describe('userRegistration', () => {
    it('should return valid registration', (done) => {
    let inputBody = {                                                 //body
      "firstName": "Manju",
      "lastName": "Reddy",
      "email":"abcd@gmail.com",
      "password":"aA1"
    }
      request(app)
        .post('/api/v1/users')
        .send(inputBody)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(201);
          //expect(res.body.data).to.be.an('array');

          done();
        });
    });
  });

describe('userLogin', () => {
  it('should return valid login', (done) => {
  let userLogin = {                                                    
    "email": "abcd@gmail.com",
    "password": "aA1"
  }
    request(app)
      .get('/api/v1/users/login')
      .send(userLogin)
      .end((err, res) => { 
        token = res.body.data.token;
        console.log(token);
        expect(res.statusCode).to.be.equal(200);
        //expect(res.body.data).to.be.an('array');
        done();
      });
  });
});



var id;
describe('note', () => {
  it('should return valid creation of note', (done) => {
  let details = {                                                    
    "title": "abcd",
    "description": "aA1"
  }
    request(app)
      .post('/api/v1/notes/')
      .set('authorization', `bearer ${token}`)
      .send(details)
      .end((err, res) => {
      id = res.body.data._id
      console.log(id);
        expect(res.statusCode).to.be.equal(201);
        //expect(res.body.data).to.be.an('array');
        done();
      });
  });


  it('should return valid getAll note', (done) => {
    let details = {                                                    
      "title": "abcd",
      "description": "aA1"
    }
      request(app)
        .get('/api/v1/notes/')
        .set('authorization', `bearer ${token}` )
        .send(details)
        .end((err, res) => { 
          expect(res.statusCode).to.be.equal(202);
          //expect(res.body.data).to.be.an('array');
          done();
        });
    });


it('should return valid get note by ID', (done) => {
  let details = {                                                    
    "title": "abcd",
    "description": "aA1"
  }
    request(app)
      .get(`/api/v1/notes/${id}/`)
      .set('authorization', `bearer ${token}` )
      .send(details)
      .end((err, res) => {  
        expect(res.statusCode).to.be.equal(200);
        
        //expect(res.body.data).to.be.an('array');
        done();
      });
  });


  it('should return valid update note by id', (done) => {
    let details = {                                                    
      "title": "abcd",
      "description": "aA1"
    }
      request(app)
        .put(`/api/v1/notes/${id}/`)
        .set('authorization', `bearer ${token}` )
        .send(details)
        .end((err, res) => { 
          expect(res.statusCode).to.be.equal(200);
          //expect(res.body.data).to.be.an('array');
          done();
        });
    });


    it('should return valid archive note by id', (done) => {
      let details = {                                                    
        "title": "abcd",
        "description": "aA1"
      }
        request(app)
          .put(`/api/v1/notes/${id}/archive`)
          .set('authorization', `bearer ${token}` )
          .send(details)
          .end((err, res) => { 
            expect(res.statusCode).to.be.equal(202);
            //expect(res.body.data).to.be.an('array');
            done();
          });
      });


      it('should return valid trash note by id', (done) => {
        let details = {                                                    
          "title": "abcd",
          "description": "aA1"
        }
          request(app)
            .put(`/api/v1/notes/${id}/trash`)
            .set('authorization', `bearer ${token}` )
            .send(details)
            .end((err, res) => { 
              expect(res.statusCode).to.be.equal(202);
              //expect(res.body.data).to.be.an('array');
              done();
            });
        });


        it('should return valid delete note by id', (done) => {
          let details = {                                                    
            "title": "abcd",
            "description": "aA1"
          }
            request(app)
              .put(`/api/v1/notes/${id}/`)
              .set('authorization', `bearer ${token}` )
              .send(details)
              .end((err, res) => { 
                expect(res.statusCode).to.be.equal(200);
                //expect(res.body.data).to.be.an('array');
                done();
              });
          }); 
});
});
