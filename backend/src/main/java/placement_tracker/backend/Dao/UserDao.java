package placement_tracker.backend.Dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import placement_tracker.backend.Model.Application;
import placement_tracker.backend.Repo.UserRepo;
import placement_tracker.backend.Services.UserService;

@Service
public class UserDao implements UserService{
	@Autowired
    private UserRepo userRepo;
	@Override
	public void addApplication(Application application) {
		// TODO Auto-generated method stub
		userRepo.save(application);
	}

}
