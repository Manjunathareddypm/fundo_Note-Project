import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';

import app from '../../src/index';

describe('User APIs Test', () => {
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

  describe('GET /users', () => {
    it('should return empty array', (done) => {
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
});
