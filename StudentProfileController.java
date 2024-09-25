@RestController
@RequestMapping("/api/student")
public class StudentProfileController {

    @Autowired
    private StudentProfileService studentProfileService;

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(@RequestParam Long studentId) {
        StudentProfile profile = studentProfileService.getProfileById(studentId);
        return ResponseEntity.ok(profile);
    }
}
