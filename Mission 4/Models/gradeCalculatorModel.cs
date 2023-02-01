using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_4.Models
{
    public class gradeCalculatorModel
    {
        [Required]
        [Range(0, 100)]
        public float assignments { get; set; }
        [Required]
        [Range(0,100)]
        public float groupProject { get; set; }
        [Required]
        [Range(0, 100)]
        public float quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public float midterm { get; set; }
        [Required]
        [Range(0, 100)]
        public float final { get; set; }
        [Required]
        [Range(0, 100)]
        public float intex { get; set; }
    }
}
