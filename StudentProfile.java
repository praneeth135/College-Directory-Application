@Entity
public class StudentProfile {
    @Id
    private Long userId; // Foreign Key to User
    
    private String photo;
    private String department;
    private String year;

    @OneToOne
    @MapsId
    private User user;

    // Getters and Setters
}
