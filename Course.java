@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;

    @ManyToOne
    @JoinColumn(name = "faculty_id")
    private FacultyProfile faculty;

    @ManyToMany(mappedBy = "courses")
    private List<StudentProfile> students;

    // Getters and Setters
}
