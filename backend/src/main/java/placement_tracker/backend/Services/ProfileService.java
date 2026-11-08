package placement_tracker.backend.Services;

import placement_tracker.backend.Model.UserProfile;

public interface ProfileService {
	  UserProfile getProfile(String email);

	    UserProfile updateProfile(String email, UserProfile profile);
   
}
