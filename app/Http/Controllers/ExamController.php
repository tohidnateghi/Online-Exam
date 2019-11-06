<?php

namespace App\Http\Controllers;

use App\Exam;
use App\Question;
use Illuminate\Http\Request;

class ExamController extends Controller
{
    public function index() {
        return view('exam.index');
    }

    public function show($id) {
        $exam = Exam::with('questions')->findOrFail($id);
        return view('exam.show', compact('exam'));
    }

    public function create() {
        return view('exam.create');
    }

    public function store(Request $request) {
        $data = json_decode($request->getContent(), true);

        $exam = Exam::create([
            'title' => $data['title'],
            'time' => $data['time']
        ]);

        foreach($data['questions'] as $question) {
            $exam->questions()->create([
                'exam_id' => $exam->id,
                'text' => $question['text'],
                'option1' => $question['option1'],
                'option2' => $question['option2'],
                'option3' => $question['option3'],
                'option4' => $question['option4'],
                'answer' => $question['answer'],
            ]);
        }

        $request->session()->flash('status', 'آزمون با موفقیت اضافه شد');
    }

    public function result($id, Request $request) {

        $answer = Question::where('exam_id', $id)->get(['id', 'answer']);

        $correct = 0;
        $wrong = 0;

        foreach($request->all() as $key => $value) {
            foreach($answer as $k => $v) {
                if($v['id'] == str_replace('q', '', $key)) {
                    if($v['answer'] == $value) {
                        $correct++;
                    }
                    else {
                        $wrong++;
                    }
                }
            }
        }

        // return $correct.' '.$wrong;

        return response()->json($answer);
    }
}
