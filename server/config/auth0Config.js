import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience
})