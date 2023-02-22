import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNotesValidator } from '../validators/note.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a note
router.post('',newNotesValidator, noteController.createNewNote);

//to diplay note
router.get('' ,userAuth, noteController.getAllNote);

//route to get a single note by id
router.get('/:_id' ,userAuth, noteController.getNote);

//route to update a note by id
router.put('/:_id' ,userAuth, noteController.updateNote);

//route to delete a single note by id
router.delete('/:_id',userAuth, noteController.deleteNote);

//route to archieve a note
router.put('/:_id/archive', userAuth, noteController.archiveNote);

//route to trash a note
router.put('/:_id/trash', userAuth, noteController.trashNote);

export default router