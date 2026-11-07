package placement_tracker.backend.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import placement_tracker.backend.Model.Register;
import placement_tracker.backend.Dao.HomeDao;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private HomeDao hd;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        Register register = hd.findByEmail(email);

        if (register == null) {
            throw new UsernameNotFoundException("User not found: " + email);
        }

        return User.builder()
                .username(register.getEmail())
                .password(register.getPassword())
                .roles("USER")
                .build();
    }
}