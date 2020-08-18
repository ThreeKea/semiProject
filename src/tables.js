const table = [
    {
        id: 't1',
        name: 'VANGSTA 방스타',
        price: '129,000',
        description: '확장형테이블, 화이트120/180x75 cm',
        detail: '4-6인용 식탁으로 보조상판을 이용해서 원하는 크기로 조절할 수 있습니다.'+
                '테이블을 확장하지 않을 때도 상판에 이음새가 드러나지 않는 스마트한 디자인입니다.'+
                '식탁을 펼치면 다리가 함께 움직이기 때문에 의자를 놓을 수 있는 공간이 늘어납니다.'+
                '멜라민 상판은 방수가 잘 되고 얼룩이 생기지 않아서 편하게 관리할 수 있습니다.'+
                '보조상판을 테이블 밑에 보관해두고 언제든지 꺼내 쓸 수 있습니다.'+
                '한 사람이 쉽게 확장할 수 있습니다.'+
                '확장형 보조상판 1개가 포함되어 있습니다.'+
                '테스트를 거친 제품입니다. 테이블의 겉면은 액체, 음식물, 기름 자국이 남지 않고 열기, 흠집, 충격에도 강하며 테이블 구조는 견고하고 튼튼해서 오랫동안 일상적으로 사용할 수 있습니다.'+
                '4-6인용.'+
                '실내에서만 사용하세요.'+
                '안정성을 위하여 필요하면 조립 2주 후에 나사를 다시 조여주세요.',
        imgUrl: ''
    },

    {
        id: 't2',
        name: 'MICKE 미케',
        price: '69,000',
        description: '책상, 참나무무늬73x50 cm',
        detail: '뒷쪽에 전선인출구가 있어서 콘센트와 전선을 보이지 않게 정리할 수 있습니다.'+
                '다리는 좌우 어디에든 설치할 수 있습니다.'+
                '서랍에 스톱 기능이 있어서 안전하게 열 수 있습니다.'+
                '뒷면을 마감처리하여 어디에나 놓을 수 있습니다.'+
                '전자기기 충전시 사용 설명서를 참고하세요. 오랜 시간동안 사용하지 않을 때는 전원을 꺼두는 것이 좋습니다.'+
                '가정용 적합성 테스트를 한 제품입니다.',
        imgUrl: ''
    },

    {
        id: 't3',
        name: 'HOL 홀',
        price: '69,900',
        description: '수납테이블, 아카시아나무98x50 cm',
        detail: '천연 원목 소재로 내구성이 뛰어납니다.'+
                '테이블 상판 아래를 실용적인 수납공간으로 활용할 수 있습니다.',
        imgUrl: ''
    },
    
    {
        id: 't4',
        name: 'FJÄLLBO 피엘보',
        price: '59,900',
        description: '노트북책상, 블랙100x36 cm',
        detail: '메탈과 원목 소재의 소박한 책상으로, 좁은 공간에 잘 맞는 유연하고 기능적인 작업공간을 만들 수 있습니다.'+
                '목재는 살아 숨 쉬는 천연 소재로 독특한 나뭇결과 색상, 질감을 가지고 있어 원목 가구마다 고유한 특성을 갖고 있습니다.'+
                '바퀴가 달려있어서 쉽게 옮겨 원하는 곳에서 사용할 수 있습니다.'+
                '다리받침의 높이를 조절할 수 있어서 고르지 않은 바닥에도 안정적으로 세울 수 있습니다.'+
                '접착식 클립이 있어서 전선을 깔끔하게 정리할 수 있습니다.'+
                '시리즈 제품.',
        imgUrl: ''
    },
    
    {
        id: 't5',
        name: 'MICKE 미케',
        price: '169,000',
        description: '워크스테이션, 참나무무늬105x50 cm',
        detail: '후면 패널에 통풍구가 있어 컴퓨터나 기타 장비 주변의 공기가 효율적으로 순환됩니다.'+
                '뒷면을 마감처리하여 어디에나 놓을 수 있습니다.'+
                '서랍에 스톱 기능이 있어서 안전하게 열 수 있습니다.'+
                '상단 선반 위 공간에 책, CD, DVD 등을 수납할 수 있습니다. 책꽂이 역할을 해주는 측면 패널이 있어 더욱 안정적입니다.'+
                '뒤쪽에 전선인출구가 있어서 콘센트와 전선을 보이지 않게 정리할 수 있습니다.'+
                '물건에 따라 자유롭게 선반을 조절할 수 있습니다. 선반의 높이를 조절하여 더욱 효율적으로 공간을 활용해보세요.'+
                '수납유닛은 공간에 맞게 좌우 어디에나 놓을 수 있습니다.'+
                '가정용 적합성 테스트를 한 제품입니다.',
        imgUrl: ''
    },
    
    {
        id: 't6',
        name: 'EKEDALEN 에케달렌',
        price: '249,000',
        description: '확장형테이블, 화이트120/180x80 cm',
        detail: '테이블을 확장하지 않을 때도 상판에 이음새가 드러나지 않는 스마트한 디자인입니다.'+
                '길이를 조절하기만 하면 아이들과 숙제를 하거나 그림을 그리고 게임을 하는 등, 다양한 활동에 적합한 공간을 만들 수 있습니다.'+
                '테이블 다리는 테이블이 확장되더라도 항상 테이블의 모서리에 자리하고 있어 의자를 놓을 공간도 충분합니다.'+
                '한 사람의 힘으로 빠르고 간편하게 테이블을 확장할 수 있습니다.'+
                '보조상판을 테이블 밑에 보관해두고 언제든지 꺼내 쓸 수 있습니다.'+
                '원목의 나뭇결과 색상이 각각 다르기 때문에 테이블마다 독특한 매력을 느낄 수 있습니다.'+
                '간편하게 같은 시리즈의 의자와 벤치를 사용하면 잘 어울리며 IKEA의 다른 의자와 조합해도 근사합니다.'+
                '가장 엄격한 기준의 안정성, 내구성 및 안전도 테스트를 통과한 테이블입니다. 수년 동안 매일같이 사용해도 튼튼합니다.'+
                '4-6인용.'+
                '실내에서만 사용하세요.'+
                '확장형 보조상판 1개가 포함되어 있습니다.'+
                '안전한 사용을 위해 필요시 나사를 다시 조여주세요.',
        imgUrl: ''
    },
    
    {
        id: 't7',
        name: 'LACK 라크',
        price: '10,000',
        description: '보조테이블, 화이트55x55 cm',
        detail: '쉽게 조립할 수 있습니다.'+
                '가벼워서 쉽게 옮길 수 있습니다.'+
                'FIXA 바닥보호패드를 추가하여 사용할 수 있습니다; 바닥을 보호해줍니다.',
        imgUrl: ''
    },
    
    {
        id: 't8',
        name: 'TÄRENDÖ 테렌되',
        price: '39,000',
        description: '테이블, 블랙110x67 cm',
        detail: '테이블 상판은 멜라민 코팅처리가 되어 있어 열이나 흠집에 강하며, 청소도 용이합니다.'+
                '가격이 낮다고 해서 품질도 낮은 것은 아니랍니다. 가장 엄격한 기준의 안정성, 내구성 및 안전도 테스트를 통과한 테이블입니다. 수년 동안 매일같이 사용해도 튼튼합니다.',
        imgUrl: ''
    },
    
    {
        id: 't9',
        name: 'LINNMON 린몬 / ADILS 아딜스',
        price: '50,000',
        description: '테이블, 화이트120x60 cm',
        detail: '상판에는 일자형 다리를 쉽게 조립할 수 있도록 나사 구멍이 뚫려 있습니다.'+
                '다리받침의 높이를 조절할 수 있어서 고르지 않은 바닥에도 안정적으로 세울 수 있습니다.'+
                '상판에 다리를 부착하기 위한 나사가 포함되어 있습니다.',
        imgUrl: ''
    },
    
    {
        id: 't10',
        name: 'MUDDUS 무두스',
        price: '49,900',
        description: '드롭리프테이블, 화이트48/92x60 cm',
        detail: '1~2인용 드롭리프 테이블로 원하는 크기로 조절할 수 있습니다.'+
                '2인용.'+
                '실내에서만 사용하세요.'+
                '안정성을 위하여 필요하면 조립 2주 후에 나사를 다시 조여주세요.',
        imgUrl: ''
    },
    
    {
        id: 't11',
        name: 'NESNA 네스나',
        price: '19,900',
        description: '침대협탁36x35 cm',
        detail: '대나무는 내구성이 좋은 천연 소재입니다.'+
                '취급주의! 가장자리가 손상되거나 표면이 긁혔을 경우 유리가 갑자기 금이 가거나 깨질 수 있습니다.'+
                '측면으로 부딪히지 않도록 해 주세요.'+
                '측면이 가장 취약한 부분입니다',
        imgUrl: ''
    },
    
    {
        id: 't12',
        name: 'MICKE 미케',
        price: '99,900',
        description: '책상, 화이트142x50 cm',
        detail: '길이가 긴 테이블로 두 명이 함께 사용할 수 있습니다.'+
                '전선인출구와 뒤쪽 칸을 활용하여 전선과 멀티탭을 깔끔하게 정리하고 편리하게 이용할 수 있습니다.'+
                '다리는 좌우 어디에든 설치할 수 있습니다.'+
                '뒷면을 마감처리하여 어디에나 놓을 수 있습니다.'+
                '서랍에 스톱 기능이 있어서 안전하게 열 수 있습니다.'+
                '전자기기 충전시 사용 설명서를 참고하세요. 오랜 시간동안 사용하지 않을 때는 전원을 꺼두는 것이 좋습니다.'+
                '가정용 적합성 테스트를 한 제품입니다.',
        imgUrl: ''
    },
    
    {
        id: 't13',
        name: 'MICKE 미케',
        price: '199,000',
        description: '코너워크스테이션, 화이트100x142 cm',
        detail: '물건에 따라 자유롭게 선반을 조절할 수 있습니다. 선반의 높이를 조절하여 더욱 효율적으로 공간을 활용해보세요.'+
                '뒤쪽에 전선인출구가 있어서 콘센트와 전선을 보이지 않게 정리할 수 있습니다.'+
                '다리는 좌우 어디에든 설치할 수 있습니다.'+
                '책상과 서랍장을 조합해서 더 넓은 작업 공간을 만들어보세요. MICKE/미케 시리즈의 책상과 서랍장은 모두 높이가 같습니다.'+
                '22인치 평면 모니터까지 사용 가능.'+
                '전자기기 충전시 사용 설명서를 참고하세요. 오랜 시간동안 사용하지 않을 때는 전원을 꺼두는 것이 좋습니다.'+
                '가정용 적합성 테스트를 한 제품입니다.',
        imgUrl: ''
    },
    
    {
        id: 't14',
        name: 'DOCKSTA 독스타',
        price: '249,000',
        description: '테이블, 화이트, 화이트',
        detail: '편안한 느낌을 주는 원형테이블입니다.'+
                '테스트를 거친 제품입니다. 테이블의 겉면은 액체, 음식물, 기름 자국이 남지 않고 열기, 흠집, 충격에도 강하며 테이블 구조는 견고하고 튼튼해서 오랫동안 일상적으로 사용할 수 있습니다.'+
                '4인용.',
        imgUrl: ''
    },
    
    {
        id: 't15',
        name: 'LINNMON 린몬 / LERBERG 레르베리',
        price: '50,000',
        description: '테이블, 라이트그레이/화이트, 레드120x60 cm',
        detail: '보드-온-프레임(Board-on-frame)은 나무나 파티클보드, 섬유판, 재활용 종이 충전재로 제작한 프레임이 있는 단단하고 가벼운 소재입니다. 자원을 보다 적게 사용할 수 있으며 운반이 간편해 환경에도 유익합니다.'+
                '보드 온 프레임(BoF)은 프레임에 나무나 파티클보드, 섬유판, 재활용 종이 충전재로 채운 단단하고 가벼운 소재입니다. 자원을 보다 적게 사용할 수 있으며 운반이 간편해 환경에도 유익합니다.'+
                '상판 미끄럼 방지를 위한 플라스틱 범퍼가 포함되어 있습니다.',
        imgUrl: ''
    },
    
    {
        id: 't16', //16번째꺼 건너뜀!
        name: 'JOKKMOKK 요크모크',
        price: '149,000',
        description: '테이블+의자4, 앤티크 스테인',
        detail: '전체 다이닝 세트를 하나로 포장하여 제공하므로 간편하게 집으로 가져갈 수 있습니다.'+
                '등받이의 나무 무늬와 특유의 디자인 덕분에 클래식한 분위기를 연출할 수 있습니다.'+
                '좌석에 완벽하게 들어맞는 부드러운 의자패드를 추가해 편안함을 높이세요.'+
                '소나무는 시간이 지날수록 색깔이 짙어지고 풍부해지면서 더욱 멋스러워집니다.'+
                '튼튼한 원목 소재에 고풍스러운 색의 마감 처리로 오래 사용해도 그대로입니다.'+
                '테스트를 거친 제품입니다. 테이블의 겉면은 액체, 음식물, 기름 자국이 남지 않고 열기, 흠집, 충격에도 강하며 테이블 구조는 견고하고 튼튼해서 오랫동안 일상적으로 사용할 수 있습니다.'+
                '4인용.'+
                '실내에서만 사용하세요.'+
                '안정성을 위하여 필요하면 조립 2주 후에 나사를 다시 조여주세요.',
        imgUrl: ''
    },
    
    {
        id: 't17',
        name: 'MELLTORP 멜토르프',
        price: '69,900',
        description: '테이블, 화이트125x75 cm',
        detail: '이 테이블은 철제 프레임 덕분에 매우 견고합니다.'+
                '표면은 멜라민 처리되어 얼룩이나 흠집이 잘 생기지 않으며 청소도 편해 아이가 있는 가족이 사용하기에 좋습니다.'+
                '2~4인용 테이블로, 사이즈는 2가지 입니다.'+
                '심플한 직선형 디자인은 다양한 스타일과 결합하기 쉽습니다.'+
                '서로 다른 MELLTORP/멜토르프 테이블을 두 개 이상 결합하여 더 큰 테이블을 만들 수 있습니다. 예를 들어 작은 MELLTORP/멜토르프 테이블을 큰 MELLTORP/멜토르프 테이블 옆에 배치할 수 있습니다.'+
                '테스트를 거친 제품입니다. 테이블의 겉면은 액체, 음식물, 기름 자국이 남지 않고 열기, 흠집, 충격에도 강합니다.'+
                '안정성을 위하여 필요하면 조립 2주 후에 나사를 다시 조여주세요.'+
                '4인용.',
        imgUrl: ''
    },
    
    {
        id: 't18',
        name: 'MICKE 미케',
        price: '99,900',
        description: '책상, 화이트105x50 cm',
        detail: '뒷쪽에 전선인출구가 있어서 콘센트와 전선을 보이지 않게 정리할 수 있습니다.'+
                '수납유닛은 공간에 맞게 좌우 어디에나 놓을 수 있습니다.'+
                '후면 패널에 통풍구가 있어 컴퓨터 등의 장비 주변의 공기가 효율적으로 순환됩니다.'+
                '서랍에 스톱 기능이 있어서 안전하게 열 수 있습니다.'+
                '뒷면을 마감처리하여 어디에나 놓을 수 있습니다.'+
                '책상과 서랍장을 조합해서 더 넓은 작업 공간을 만들어보세요. MICKE/미케 시리즈의 책상과 서랍장은 모두 높이가 같습니다.'+
                '물건에 따라 자유롭게 선반을 조절할 수 있습니다. 선반의 높이를 조절하여 더욱 효율적으로 공간을 활용해보세요.'+
                'MICKE 높은 확장 유닛을 추가하여 사용할 수 있습니다.'+
                '확장 유닛을 추가할 경우, 전체 콤비네이션을 벽에 기대어 두어야 넘어지지 않습니다.'+
                '가정용 적합성 테스트를 한 제품입니다.'+
                '전자기기 충전시 사용 설명서를 참고하세요. 오랜 시간동안 사용하지 않을 때는 전원을 꺼두는 것이 좋습니다.',
        imgUrl: ''
    },
    
    {
        id: 't19',
        name: 'LINNMON 린몬 / ALEX 알렉스',
        price: '129,900',
        description: '테이블, 화이트120x60 cm',
        detail: '상판에는 일자형 다리를 쉽게 조립할 수 있도록 나사 구멍이 뚫려 있습니다.'+
                '서랍에 스톱 기능이 있어서 안전하게 열 수 있습니다.'+
                '뒷면을 마감처리하여 어디에나 놓을 수 있습니다.'+
                '다리받침의 높이를 조절할 수 있어서 고르지 않은 바닥에도 안정적으로 세울 수 있습니다.'+
                '가정용 적합성 테스트를 한 제품입니다.',
        imgUrl: ''
    },

    {
        id: 't20',
        name: 'GLADOM 글라돔',
        price: '14,900',
        description: '트레이테이블, 화이트45x53 cm',
        detail: '트레이를 빼서 쟁반으로 사용할 수도 있습니다.'+
                '테두리가 있어서 옮기기 쉽고 유리잔이나 그릇이 밖으로 떨어지지 않습니다.'+
                '이 디자인은 어떤 구멍에도 끼워 넣지 않고 테이블 프레임에 바로 배치하기 때문에 사용한 후 트레이를 다시 쉽게 넣을 수 있습니다.'+
                '파우더코팅스틸로 제작되어 내구성이 뛰어나며 쉽게 잘 닦입니다.'+
                '테이블을 쉽게 들어 필요한 곳으로 옮길 수 있습니다.',
        imgUrl: ''
    },
]