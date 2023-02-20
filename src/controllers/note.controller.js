import HttpStatus from 'http-status-codes';
import * as noteService from '../services/note.service';

/**
 * Controller to create a note
 * @param {object} req - request object
 * @param {object} res - respone object
 * @param {Function} next
 */

export const createNewNote = async (req, res) => {
    try {
        const data = await noteService.createNewNote(req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data:data,
            message: 'Note created succesfully'
        })
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: 'Note not created'
        })
    }
}

/**
 * Controller to getall a note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllNote = async (req, res) => {
    try {
        const data = await noteService.getAllNote(req.body);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'displaying notes'
        })
        
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: 'no data available'
        })
    }
}

/**
 * Controller to get a note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getNote = async (req, res) => {
    try {
        const data = await noteService.getNote(req.params._id);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'displaying all notes'
        })
        
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: 'no data available'
        })
    }
}

/**
 * Controller to update a note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateNote = async (req, res, next) => {
    try {
      const data = await noteService.updateNote(req.params._id, req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'User updated successfully'
      });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: 'no data updated'
        })
    }
  };
  
  
  
  
  /**
   * Controller to delete a note
   * @param  {object} req - request object
   * @param {object} res - response object
   * @param {Function} next
   */
  export const deleteNote = async (req, res, next) => {
      await noteService.deleteNote(req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: [],
        message: 'Note deleted successfully'
      });
    } 
    