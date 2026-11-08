package placement_tracker.backend.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import placement_tracker.backend.Model.Register;
import placement_tracker.backend.Model.UserProfile;

public interface UserProfileRepo extends JpaRepository<UserProfile, Long>{
	Optional<UserProfile> findByRegister(Register register);
}
