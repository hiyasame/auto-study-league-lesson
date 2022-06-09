import { getNewCourse, study } from "./api.js"
import { openid } from "./config.js"

(async () => {
    const courses = (await getNewCourse()).data
    for (let course of courses) {
        const id = course.id
        console.log(course)
        const data = await study(openid, id)
        console.log(data)
    }
})()