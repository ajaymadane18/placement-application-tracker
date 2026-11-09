package placement_tracker.backend.Services;

import java.util.List;

import placement_tracker.backend.Model.Application;

public interface UserService {
    public Application addApplication(Application application,String email);
    public List<Application> getAllApplication(String email);
}
