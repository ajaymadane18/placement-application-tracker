package placement_tracker.backend.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import placement_tracker.backend.Model.Application;

import placement_tracker.backend.Services.UserService;

@Controller
public class UserController {

	private UserService userService;
	@PostMapping("/addApplication")
	public String addApplication(@RequestBody Application application) {
		userService.addApplication(application);
		return "Application Submited";
	}
}
