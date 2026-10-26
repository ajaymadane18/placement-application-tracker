package placement_tracker.backend.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import placement_tracker.backend.Model.Login;
import placement_tracker.backend.Model.Register;
import placement_tracker.backend.Services.HomeService;
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class HomeContoller {
	@Autowired
	private HomeService hs;  
	@PostMapping("/saveRegister")
    public String register(@RequestBody Register r) {
    	   hs.register(r);
    	  return "registration successful";
    }
	
	@PostMapping("/CheckLogin")
	public String login(@RequestBody Login l) {
		  Register r1= hs.login(l);
		  System.out.println("controller"+l);
		 if(r1!=null) {
			 return "login successful";
		 }else {
			 return "login failed";
		 }
	}
}
