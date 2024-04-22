<?php
// Normal Font 
$မင်းမရှိတဲ့လောက = array(
    "ကိုယ့်ဘဝ" => "အဓိပ္ပါယ်မဲ့",
    "ဉပက္ခာတွေ" => "သိပ်များ"
);

class Sample
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'question' => $this->question,
            'choices' => $this->when($this->type === 'multiple-choice', $this->options['choices']),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}

?>