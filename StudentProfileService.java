@Service
public class StudentProfileService {

    @Autowired
    private StudentProfileRepository studentProfileRepository;

    public StudentProfile getProfileById(Long id) {
        return studentProfileRepository.findById(id).orElse(null);
    }
}
