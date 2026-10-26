package placement_tracker.backend.Services;

import placement_tracker.backend.Model.Login;
import placement_tracker.backend.Model.Register;

public interface HomeService {
    public void register(Register r);
    public Register login(Login l);
}
