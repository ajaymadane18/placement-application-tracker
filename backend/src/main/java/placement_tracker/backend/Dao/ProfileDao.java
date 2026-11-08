
package placement_tracker.backend.Dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import placement_tracker.backend.Model.Register;
import placement_tracker.backend.Model.UserProfile;
import placement_tracker.backend.Repo.UserProfileRepo;

import placement_tracker.backend.Services.ProfileService;

@Component
public class ProfileDao implements ProfileService {

    @Autowired
    private UserProfileRepo profileRepository;

    @Autowired
    private HomeDao homeDao;

    @Override
    public UserProfile getProfile(String email) {

        Register register = homeDao.findByEmail(email);

        if (register == null) {
            throw new RuntimeException("User not found");
        }

        return profileRepository.findByRegister(register)
                .orElseGet(() -> {
                    UserProfile profile = new UserProfile();
                    profile.setRegister(register);
                    return profileRepository.save(profile);
                });
    }

    @Override
    public UserProfile updateProfile(String email, UserProfile updatedProfile) {

        Register register = homeDao.findByEmail(email);

        if (register == null) {
            throw new RuntimeException("User not found");
        }

        UserProfile profile = profileRepository.findByRegister(register)
                .orElseGet(UserProfile::new);

        profile.setRegister(register);

        profile.setProfilePhoto(updatedProfile.getProfilePhoto());
        profile.setPhone(updatedProfile.getPhone());
        profile.setAddress(updatedProfile.getAddress());
        profile.setCity(updatedProfile.getCity());
        profile.setState(updatedProfile.getState());
        profile.setCountry(updatedProfile.getCountry());
        profile.setPincode(updatedProfile.getPincode());
        profile.setDateOfBirth(updatedProfile.getDateOfBirth());
        profile.setGender(updatedProfile.getGender());
        profile.setLinkedin(updatedProfile.getLinkedin());
        profile.setGithub(updatedProfile.getGithub());
        profile.setBio(updatedProfile.getBio());

        return profileRepository.save(profile);
    }
}
