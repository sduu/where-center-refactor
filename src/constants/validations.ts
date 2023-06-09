interface ValidationRules {
  condition: (value: string) => boolean;
  message: string;
}

export const validations: Record<string, ValidationRules[]> = {
  name: [
    {
      condition: (value: string) => value.length > 0,
      message: '이름을 입력해주세요.',
    },
    {
      condition: (value: string) => /^[a-zA-Z0-9]{3,20}$/i.test(value),
      message: '유저 이름은 영문 대소문자와 숫자로만 구성되어야 하며, 최소 3자 이상 20자 이하여야 합니다.',
    },
  ],
  email: [
    {
      condition: (value: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
      message: '유효한 이메일 주소를 입력해주세요.',
    },
  ],
  address: [
    {
      condition: (value: string) => value.length > 0,
      message: '주소를 입력해주세요.',
    },
  ],
};
