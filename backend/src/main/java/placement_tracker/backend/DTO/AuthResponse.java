package placement_tracker.backend.DTO;

public class AuthResponse {
   
	private String token;
	private String email;
	private String role;
	private String message;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	public AuthResponse(String token, String email, String role, String message) {
		super();
		this.token = token;
		this.email = email;
		this.role = role;
		this.message = message;
	}
	@Override
	public String toString() {
		return "AuthResponse [token=" + token + ", email=" + email + ", role=" + role + ", message=" + message + "]";
	}
	
}
