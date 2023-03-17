import fetch from "node-fetch"

const BASE_URL = "http://qndxx.cqyouths.com"

export async function study(openid, id) {
    return await fetch(`${BASE_URL}/api/course/studyCourse?openid=${openid}&id=${id}`).then(res => res.json())
}

export async function getNewCourse() {
    return await fetch(`${BASE_URL}/new_course.json?time=${new Date().getTime()}`).then(res => res.json())
}
