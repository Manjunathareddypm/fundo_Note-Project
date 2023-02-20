import note from '../models/note.model'
 

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
  export const deleteNote = async (id) => {
    await note.findByIdAndDelete(id);
    return '';
  };
  
 