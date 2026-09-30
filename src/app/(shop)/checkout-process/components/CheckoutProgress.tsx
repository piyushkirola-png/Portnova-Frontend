'use client';

import Icon from '@/components/ui/AppIcon';

interface CheckoutProgressProps {
  currentStep: number;
}

const CheckoutProgress: React.FC<CheckoutProgressProps> = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'Address', icon: 'HomeIcon' },
    { id: 2, label: 'Payment', icon: 'CreditCardIcon' },
    { id: 3, label: 'Review', icon: 'CheckCircleIcon' },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-1 items-center">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  currentStep >= step.id
                    ? 'border-[#317CA2] bg-[#317CA2] text-white'
                    : 'border-gray-300 bg-white text-gray-400'
                }`}
              >
                {currentStep > step.id ? (
                  <Icon name="CheckIcon" size={20} />
                ) : (
                  <span className="text-sm font-semibold">{step.id}</span>
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${
                  currentStep >= step.id ? 'text-[#317CA2]' : 'text-gray-400'
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-0.5 flex-1 transition-all duration-300 ${
                  currentStep > step.id ? 'bg-[#317CA2]' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutProgress;