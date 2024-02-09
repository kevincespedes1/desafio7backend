import { Router } from 'express'
import { UserController } from '../controllers/user.controller.mdb.js'
const router = Router()
const userController = new UserController()


router.get('/users', async (req, res) => {
    if (req.session.user && req.session.user.admin === true) {
        const data = await userController.getUsersPaginated(req.query.page || 1, req.query.limit || 50)
        data.pages = []
        for (let i = 1; i <= data.totalPages; i++) data.pages.push(i)

        res.render('users', {
            title: 'Listado de USUARIOS',
            data: data
        })
    } else if (req.session.user) {
        res.redirect('/profile')
    } else {
        res.redirect('/login')
    }
})

export default router;