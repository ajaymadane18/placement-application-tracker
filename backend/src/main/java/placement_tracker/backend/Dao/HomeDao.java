package placement_tracker.backend.Dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import placement_tracker.backend.Model.Login;
import placement_tracker.backend.Model.Register;
import placement_tracker.backend.Repo.HomeRepo;
import placement_tracker.backend.Services.HomeService;
@Service
public class HomeDao implements HomeService {
     @Autowired
	  HomeRepo hr;
     @Autowired
     private PasswordEncoder passwordEncoder;
	@Override
	public void register(Register r) {
		// TODO Auto-generated method stub
		r.setPassword(
			    passwordEncoder.encode(r.getPassword())
			);
		
		  hr.save(r);
	}
	@Override
	public Register login(Login l) {
		// TODO Auto-generated method stub
		   Register r= hr.findByEmail(l.getEmail()).orElse(null);
		   System.out.println("dao"+r);
		   if(r!=null ) {
			   return r;
		   }else {
			   return null;
		   }
		
	}
	public Register findByEmail(String email) {
		// TODO Auto-generated method stub
		      return hr.findByEmail(email).get();
		
	}
}

