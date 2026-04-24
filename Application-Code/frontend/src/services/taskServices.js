import axios from "axios";
const apiUrl = "http://a58649b771b5641768914a515e8df8e3-1110616614.us-east-1.elb.amazonaws.com:3500/api/tasks";
console.log(apiUrl)
export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
