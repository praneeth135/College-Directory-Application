@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true)
    private String username;
    
    private String password;
    
    private String role; // Enum for roles: STUDENT, FACULTY, ADMINISTRATOR
    
    private String name;
    
    private String email;
    
    private String phone;

    // Getters and Setters
}
