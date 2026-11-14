package placement_tracker.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import placement_tracker.backend.Model.Application;

import placement_tracker.backend.Services.UserService;

@RestController
public class UserController {
    @Autowired
	private UserService userService;
	@PostMapping("/addApplication")
	public Application addApplication(@RequestBody Application application,Authentication authentication) {
		String email=authentication.getName();
		return  userService.addApplication(application,email);
		
	}
	
	@GetMapping("/getApplication")
	public List<Application> getAllApplication(Authentication authentication){
		       String email=authentication.getName();
		return userService.getAllApplication(email);
	}
	
	@DeleteMapping("/deleteApplication/{id}")
	public String deleteApplication(@PathVariable Long id) {
		   userService.deleteApplication(id);
		return "delete Application";
	}
	
	@PutMapping("/updateApplication/{id}")
	public String updateApplication(@PathVariable Long id, @RequestBody Application updatedApplication) {
		   userService.updateApplication(updatedApplication, id);
		   return "data updated";
	}
	
	
}
