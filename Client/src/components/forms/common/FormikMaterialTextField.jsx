import React from 'react'
import {useFormikContext} from 'formik'
import {TextField} from '@material-ui/core'



function FormikMaterialTextField(props) {
    const formik = useFormikContext()
    const {name} = props
console.log(formik.errors)
    return (
        <TextField
            {...props}
            error={!!formik.errors[name]}
            value={formik.values[name]}
            onInput={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.errors[name]}
            InputLabelProps={{shrink: false}}        />
    )
}

export default FormikMaterialTextField
