interface ValidationData {
  condition: (value: string, confirm?: string) => boolean;
  message: string;
}

interface ValidationRules {
  required: ValidationData;
  pattern?: ValidationData;
}

export const validations: Record<string, ValidationRules> = {
  name: {
    required: {
      condition: (value: string) => value.length > 0,
      message: '이름을 입력해주세요.',
    },
    pattern: {
      condition: (value: string) => /^[a-zA-Z0-9가-힣]{3,20}$/i.test(value),
      message: '이름은 영문과 숫자, 한글로만 구성되어야 하며, 최소 3자 이상 20자 이하여야 합니다.',
    },
  },
  email: {
    required: {
      condition: (value: string) => value.length > 0,
      message: '이메일을 입력해주세요.',
    },
    pattern: {
      condition: (value: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
      message: '유효한 이메일 주소를 입력해주세요.',
    },
  },
  address: {
    required: {
      condition: (value: string) => value.length > 0,
      message: '주소를 입력해주세요.',
    },
  },
  password: {
    required: {
      condition: (value: string) => value.length > 0,
      message: '비밀번호를 입력해주세요.',
    },
  },
  password2: {
    required: {
      condition: (value: string) => value.length > 0,
      message: '비밀번호 확인란을 입력해주세요.',
    },
    pattern: {
      condition: (password: string, confirm?: string) => password === confirm,
      message: '비밀번호가 일치하지 않습니다.',
    },
  },
};
