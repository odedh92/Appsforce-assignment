interface ApiResponse<T> {
    data:T | null,
    error:ApiError | null
}
interface ApiError {
    status:number
    message:string
}

export{ApiResponse}