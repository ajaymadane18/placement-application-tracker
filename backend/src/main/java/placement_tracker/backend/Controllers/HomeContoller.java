package placement_tracker.backend.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import placement_tracker.backend.DTO.AuthResponse;
import placement_tracker.backend.Model.Login;
import placement_tracker.backend.Model.Register;
import placement_tracker.backend.Security.JwtService;
import placement_tracker.backend.Services.HomeService;
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class HomeContoller {
	@Autowired
	private HomeService hs;  
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private JwtService jwtService;
	
	@PostMapping("/saveRegister")
    public String register(@RequestBody Register r) {
    	   hs.register(r);
    	  return "registration successful";
    }
	
	@PostMapping("/CheckLogin")
	public AuthResponse login(@RequestBody Login l) {

	    Register r1 = hs.login(l);

	    if (r1 == null) {
	        return new AuthResponse(null, null, null, "Invalid Email");
	    }

	    if (!passwordEncoder.matches(l.getPassword(), r1.getPassword())) {
	        return new AuthResponse(null, null, null, "Wrong Password");
	    }

	    String token = jwtService.generateToken(r1.getEmail());

	    return new AuthResponse(
	        token,
	        r1.getEmail(),
	        "USER",
	        "Login successful"
	    );
	}
	
	@GetMapping("/test/protected")
	public String testProtected() {
	    return "JWT authentication successful!";
	}
}
