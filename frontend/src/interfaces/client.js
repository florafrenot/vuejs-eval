// const clientInterface = {
//     id: Date.now(),
//     firstName: '',
//     lastName: '',
//     companyName: ''
// }


const clientInterface = {
    id: Date.now(),
    firstName: '',
    lastName: '',
    companyName: '',
    creationDate: new Date().toISOString().slice(0,10),
    fonction: '',
    telephone: '',
    email: '',
    adresse: '',
    codePostale: '',
    ville: '',
    pays: ''
}
  
export { clientInterface }
  