
// url for server call 
// query for graphql
export type ApiFetcherOptions = {
  url: string,
  query: string 
}


// generic type for  Call Results
export type ApiFetcherResults<T> = {
  data: T
}

export interface ApiConfig {
  apiUrl: string, 
  fetch<T>(options: ApiFetcherOptions)
  : Promise<{data: T}>
  // fetch with generic type T that takes options type fetcheroptions returns Promise<data with data Type T>
}