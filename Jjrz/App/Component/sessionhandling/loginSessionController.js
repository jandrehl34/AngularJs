angular
.module('MyApp')
.controller('loginSessionController',loginSessionController)

//localstorage
//sessionstorage
//cookies

//loginSessionController.$inject = ["cookie"];
function loginSessionController(sessionhandlingservice,$sanitize,$localStorage,$cookies,$cookieStore)
{
    //take note when using $scope all of the scope will be stored in $localStorage versus when using self only the values 
    //passed in localstorage will be stored using $scope may have storing issue in JSON since functions are undefined.
    var self = this;
    self.Password="admin";
    self.Username="admin";
    self.submit1 = submit1;


    var _session = $localStorage || null;
    self.data = {
        value:{
            //pang display nung na save na value sa localstorage
             // session : $localStorage.login._id,
              _id : null,
              firstname : null,
              lastname : null,
              gender: null}  
    }
  
    function submit1(){
        var self = this;
        var data = {
            'username': $sanitize(self.Username),
            'Password': $sanitize(self.Password),
        }
     
            sessionhandlingservice.login(data).then(function(success){
            console.log("login constroller success",success.data[0].firstname);
      //using localstorage
            $localStorage.login = {
                _id : success.data[0]._id
            }
      //using cookie     
          // $cookieStore.put('cookieSession',success.data[0]._id);
        //;

          }, function(error){ 
              console.log("login controller error",error)
          })
    }
        


    
}