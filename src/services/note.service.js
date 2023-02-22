import note from '../models/note.model'
import jwt from 'jsonwebtoken'
import noteModel from '../models/note.model';
 

//create a new note

export const createNewNote = async(body, Token) => {
  const bearerToken = Token.split(' ')[1];
  const  user  = jwt.verify(bearerToken, process.env.SECRET_KEY);
  const newUser = {
    userID:  user.id,
    title: body.title,
    description: body.description,
    color:body.color
  };
  const data = await note.create(newUser)
  return data  
};


// get all note
export const getAllNote = async () => {
    const data = await note.find();
    return data
}


 //get single user
 export const getNote = async (id) => {
    const data = await note.findById(id);
    return data;
  };


//update single user
export const updateNote = async (_id, body) => {
    const data = await note.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return data;
  };
  
  
  
  //delete single user
  export const deleteNote = async (noteID, Token) => {
    const bearerToken = Token.split(' ')[1];
  const  user  = jwt.verify(bearerToken, process.env.SECRET_KEY);
  const data = await note.findById(noteID)
  if(data !== null){
    if(data.userID === user.data.id){
      data = await note.findByIdAndDelete(noteID)
  }
    }
    return data;
  };

  //archieve a note
export const archiveNote = async (id) => {
  console.log(id);
  const note = await getNote(id);
  console.log(note);
  const isArchived = note.archive === false ? true : false;
  const newUser = {
    title: note.title,
    description: note.description,
    color:note.color,
    archive:isArchived
  };
  const data = await updateNote(id, newUser)
  return data;
};

//trash a note
export const trashNote = async (id) => {
  const note = await getNote(id)
  const isTrash = note.trash === false ? true : false;
  const newUser = {
    title: note.title,
    description: note.description,
    color:note.color,
    trash:isTrash
  };
  const data = await updateNote(id, newUser)
  return data;
};