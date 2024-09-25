@Entity
public class FacultyProfile {
    @Id
    private Long userId; // Foreign Key to User
    
    private String officeHours;
    private String department;

    @OneToOne
    @MapsId
    private User user;

    // Getters and Setters
}
