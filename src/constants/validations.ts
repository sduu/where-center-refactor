interface ValidationRules {
  condition: (value: string) => boolean;
  message: string;
}

export const validations: Record<string, ValidationRules> = {
  name: {
    condition: (value: string) => value.length > 0,
    message: '이름을 입력해주세요.',
  },
  email: {
    condition: (value: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
    message: '유효한 이메일 주소를 입력해주세요.',
  },
  password: {
    condition: (value: string) => value.length >= 8,
    message: '비밀번호는 8자 이상이어야 합니다.',
  },
};
