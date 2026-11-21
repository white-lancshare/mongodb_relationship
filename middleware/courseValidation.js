const joi=require('joi')

exports.createCourseValidation=(req,res,next)=>{
    const schema= joi.object({
    courseCode:joi.string().trim().pattern(new RegExp(`^[a-zA-Z0-9]+$`)).required().messages({   
     'string.base': 'Code must be a string',
    'string.empty': 'Code cannot be empty',
    'any.required': 'Code is required',
    'string.pattern.base': 'Code must contain both letters and numbers with no spaces'
    }),
     title:joi.string().trim().pattern(new RegExp(`^[a-zA-Z0-9]+$`)).required().messages({
        'string.base': 'title must be a string',
    'string.empty': 'title cannot be empty',
    'any.required': 'title is required',
    'string.pattern.base': 'title must contain both letters and numbers with no spaces'
     }), 
     creditUnits:joi.string().trim().pattern(new RegExp(`^[a-zA-Z0-9]+$`)).required().messages({
        'string.base': 'creditUnits must be a string',
    'string.empty': 'creditUnits cannot be empty',
    'any.required': 'creditUnits is required',
    'string.pattern.base': 'creditUnits must contain both letters and numbers with no spaces'
     })
    })

    const {error}= schema.validate(req.body)

    if(error){
        return res.status(400).json({
            message:'there is a bad request',
            err:error.details[0].message
        })
    }
    next()
}

exports.updateCourseValidation=(req,res,next)=>{
    const schema= joi.object({
    courseCode:joi.string().trim().pattern(new RegExp(`^[a-zA-Z0-9]+$`)).optional().messages({   
     'string.base': 'Code must be a string',
    'string.empty': 'Code cannot be empty',
    'any.required': 'Code is required',
    'string.pattern.base': 'Code must contain both letters and numbers with no spaces'
    }),
     title:joi.string().trim().pattern(new RegExp(`^[a-zA-Z0-9]+$`)).optional().messages({
        'string.base': 'title must be a string',
    'string.empty': 'title cannot be empty',
    'any.required': 'title is required',
    'string.pattern.base': 'title must contain both letters and numbers with no spaces'
     }), 
     creditUnits:joi.string().trim().pattern(new RegExp(`^[a-zA-Z0-9]+$`)).optional().messages({
        'string.base': 'creditUnits must be a string',
    'string.empty': 'creditUnits cannot be empty',
    'any.required': 'creditUnits is required',
    'string.pattern.base': 'creditUnits must contain both letters and numbers with no spaces'
     })
    })

    const {error}= schema.validate(req.body)

    if(error){
        return res.status(400).json({
            message:'there is a bad request',
            err:error.details[0].message
        })
    }
    next()
}