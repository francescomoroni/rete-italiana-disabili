export const EXAM_CORRECT_ANSWERS: Record<number, string> = {
  1: 'B',
  2: 'B',
  3: 'B',
  4: 'A',
  5: 'B',
  6: 'A',
}

export const EXAM_PASSING_SCORE = 4

export function scoreExam(answers: Record<string, string>) {
  let score = 0

  for (const [questionId, correct] of Object.entries(EXAM_CORRECT_ANSWERS)) {
    const given = String(answers[questionId] ?? '').trim().toUpperCase()
    if (given === correct) score += 1
  }

  const total = Object.keys(EXAM_CORRECT_ANSWERS).length

  return {
    score,
    total,
    passed: score >= EXAM_PASSING_SCORE,
  }
}
