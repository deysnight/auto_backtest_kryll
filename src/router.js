import { Router } from 'express'
import path from 'path'

export default function initRouter() {
    const router = Router()
    const static_path = "/www"

    router.get('/', (req, res) => {
        res.sendFile(path.join(process.cwd() + static_path + '/dashboard.html'));
    })

    return router
}
