package placement_tracker.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Application {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
   private int id;
   private String companyName;
   private String jobRole;
   private String date;
   private String location;
   private String jobType;
   private String applicationStatus;
   private String applicationLink;
   private String jobDescription;
   public int getId() {
	return id;
   }
   public void setId(int id) {
	this.id = id;
   }
   public String getCompanyName() {
	return companyName;
   }
   public void setCompanyName(String companyName) {
	this.companyName = companyName;
   }
   public String getJobRole() {
	return jobRole;
   }
   public void setJonRole(String jobRole) {
	this.jobRole = jobRole;
   }
   public String getDate() {
	return date;
   }
   public void setDate(String date) {
	this.date = date;
   }
   public String getLocation() {
	return location;
   }
   public void setLocation(String location) {
	this.location = location;
   }
   public String getJobType() {
	return jobType;
   }
   public void setJobType(String jobType) {
	this.jobType = jobType;
   }
   public String getApplicationStatus() {
	return applicationStatus;
   }
   public void setApplicationStatus(String applicationStatus) {
	this.applicationStatus = applicationStatus;
   }
   public String getApplicationLink() {
	return applicationLink;
   }
   public void setApplicationLink(String applicationLink) {
	this.applicationLink = applicationLink;
   }
   public String getJobDescription() {
	return jobDescription;
   }
   public void setJobDescription(String jobDescription) {
	this.jobDescription = jobDescription;
   }
   @Override
   public String toString() {
	return "Application [id=" + id + ", companyName=" + companyName + ", jonRole=" + jobRole + ", date=" + date
			+ ", location=" + location + ", jobType=" + jobType + ", applicationStatus=" + applicationStatus
			+ ", applicationLink=" + applicationLink + ", jobDescription=" + jobDescription + "]";
   }
   
   
}
