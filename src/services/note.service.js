import note from '../models/note.model'
import { userAuth } from '../middlewares/auth.middleware';

//create a new note

export const createNewNote = async(body) => {
  const data = await note.create(body)
  return data  
};


// get all note
export const getAllNote = async () => {
    const data = await note.find();
    return data
}


 //get single user
 export const getNote = async (id, userID) => {
    const data = await note.findById(id, userID);
    return data;
  };


//update single user
export const updateNote = async (id, body, userID) => {
    const data = await note.findByIdAndUpdate(
      id, body, userID
    );
    console.log(data);
    return data;
  };
  
  
  
  //delete single user
  export const deleteNote = async (id, userID ) => { 
  const data = await note.findByIdAndDelete(id, userID)
    return data;
  };

  //archieve a note
export const archiveNote = async (id,userID) => {
  console.log(id);
  const note = await getNote(id,userID);
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
export const trashNote = async (id,userID) => {
  const note = await getNote(id,userID)
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



