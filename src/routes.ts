import { Router, Request, Response } from "express";


// middlewares
import isAuthenticated from "./middlewares/isAuthenticated";

// controllers
import CreateUserController from "./controllers/user/CreateUserController";
import AuthUserController from "./controllers/user/AuthUserController";
import UserDetailsController from "./controllers/user/UserDetailsController";
import ListClientsController from "./controllers/clients/ListClientsController";
import CreateServiceController from "./controllers/service/CreateServiceController";
import ListServicesControllers from "./controllers/service/ListServicesController";
import DeleteServiceController from "./controllers/service/DeleteServiceController";
import EditServiceController from "./controllers/service/EditServiceController";
import AddClientController from "./controllers/clients/AddClientController";
import FinishClientController from "./controllers/clients/FinishClientController";
import EditClientController from "./controllers/clients/EditClientController";
import EditUserController from "./controllers/user/EditUserController";
import DeleteClientController from "./controllers/clients/DeleteClientController";
import AddBarberController from "./controllers/barber/AddBarberController";
import EditBarberController from "./controllers/barber/EditBarberService";
import ListBarbersController from "./controllers/barber/ListBarbersController";

const router = Router()

// User routes

// create new user
router.post('/user', new CreateUserController().handle)
// user login
router.post('/session', new AuthUserController().handle)
// user details
router.get('/me', isAuthenticated, new UserDetailsController().handle)
// change username
router.put('/user', isAuthenticated, new EditUserController().handle)



// service routes

// create service
router.post('/service', isAuthenticated, new CreateServiceController().handle)
// get services list
router.get('/services', isAuthenticated, new ListServicesControllers().handle)
// delete service
router.delete('/service', isAuthenticated, new DeleteServiceController().handle)
// edit service
router.put('/service', isAuthenticated, new EditServiceController().handle)




// client routes

// get clients list
router.get('/clients', isAuthenticated, new ListClientsController().handle)
// add client
router.post('/client', isAuthenticated, new AddClientController().handle)
router.put('/client', isAuthenticated, new FinishClientController().handle)
router.put('/client/edit', isAuthenticated, new EditClientController().handle)
// delete client
router.delete('/client', isAuthenticated, new DeleteClientController().handle)



// barber routes

// add barber
router.post('/barber', isAuthenticated, new AddBarberController().handle)
// edit barber
router.put('/barber', isAuthenticated, new EditBarberController().handle)
// list barbers
router.get('/barber', isAuthenticated, new ListBarbersController().handle)



export {router}