
package placement_tracker.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import placement_tracker.backend.Model.UserProfile;
import placement_tracker.backend.Services.ProfileService;

import org.springframework.security.core.Authentication;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "http://localhost:5173")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping
    public UserProfile getProfile(Authentication authentication) {

        String email = authentication.getName();

        return profileService.getProfile(email);
    }

    @PutMapping
    public UserProfile updateProfile(
            Authentication authentication,
            @RequestBody UserProfile profile) {

        String email = authentication.getName();

        return profileService.updateProfile(email, profile);
    }
}
