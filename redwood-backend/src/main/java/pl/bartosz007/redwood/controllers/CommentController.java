package pl.bartosz007.redwood.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.bartosz007.redwood.payloads.requests.BasicPayload;
import pl.bartosz007.redwood.payloads.requests.CommentPayload;
import pl.bartosz007.redwood.payloads.responses.BasicResponseMessage;
import pl.bartosz007.redwood.services.CommentService;

@RestController
public class CommentController {

    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/addComment")
    @CrossOrigin(origins = "http://localhost:3000")
    public BasicResponseMessage addComment(@RequestBody CommentPayload commentPayload) {
        return commentService.addComment(commentPayload);
    }

    @DeleteMapping("/deleteComment")
    @CrossOrigin(origins = "http://localhost:3000")
    public BasicResponseMessage deleteComment(@RequestBody BasicPayload basicPayload) {
        return commentService.deleteComment(basicPayload);
    }

}
