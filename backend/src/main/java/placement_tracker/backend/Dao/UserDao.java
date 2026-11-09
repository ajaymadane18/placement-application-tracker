package placement_tracker.backend.Dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import placement_tracker.backend.Model.Application;
import placement_tracker.backend.Model.Register;
import placement_tracker.backend.Repo.UserRepo;
import placement_tracker.backend.Services.UserService;

@Service
public class UserDao implements UserService{
	@Autowired
	private HomeDao homeDao;
	@Autowired
    private UserRepo userRepo;
	@Override
	public Application addApplication(Application application, String email) {
		// TODO Auto-generated method stub
		 Register register= homeDao.findByEmail(email);
		    application.setRegister(register);
		  return  userRepo.save(application);
	}
	@Override
	public List<Application> getAllApplication(String email) {
		// TODO Auto-generated method stub
		 Register register= homeDao.findByEmail(email);
		return userRepo.findByRegister(register) ;
	}
	

}
