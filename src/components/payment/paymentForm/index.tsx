"use client"

import {
  CreditCardIcon,
  RadioButtons,
  BankIcon,
  Button,
  InputField,
  SelectField,
  Spinner,
} from "@hexify/atoms"
import styles from "./paymentForm.module.css"
import React, { useState } from "react"
import { Form, Formik } from "formik"
import PaymentSuccessModal from "../paymentSuccessModal"
import {
  useMakePaymentForAppointment,
  useVerifyPaymentForAppointment,
} from "@/http/appointment/mutation"
import PaymentReceiptModal from "../paymentReceiptModal"
import Paystack from "@paystack/inline-js"
import { isFeatureEnabled } from "../../../../../../packages/engine/brand/feature"

const PaymentForm = ({ appointmentId }: { appointmentId: string }) => {
  const [paymentOption, setPaymentOption] = useState()
  const [showPaymentSuccessModal, setShowPaymentSuccessModal] = useState(false)
  const [paymentSuccessState, setPaymentSuccessState] = useState(false)
  const [paymentReceiptData, setPaymentReceiptData] = useState({})
  const [showPaymentReceiptModal, setShowPaymentReceiptModal] = useState(false)
  const paymentMutation = useMakePaymentForAppointment()
  const verifyPaymentMutation = useVerifyPaymentForAppointment()
  const [step, setStep] = useState(1)

  const onSelectPaymentOptionHandler = (e: any) => {
    setPaymentOption(e?.target?.value)
  }

  const handlePayStackPayment = () => {
    const payStackPopup = new Paystack()
    paymentMutation.mutate(
      {
        provider: "paystack",
        appointmentId: appointmentId,
      },
      {
        onSuccess: (data: { data: { access_code: string } }) => {
          payStackPopup?.resumeTransaction(data?.data?.access_code, {
            onSuccess: (response) => {
              verifyPaymentMutation?.mutate(
                {
                  provider: "paystack",
                  reference: response?.reference,
                },
                {
                  onSuccess: (response: { data: Record<string, any> }) => {
                    setPaymentReceiptData(response?.data)
                    setPaymentSuccessState(true)
                    setShowPaymentSuccessModal(true)
                  },
                }
              )
            },
          })
        },
        onError: (error) => {
          console.log({ error })
          setShowPaymentSuccessModal(true)
          setPaymentReceiptData({
            hideReceipt: true,
            appointment: { id: appointmentId },
          })
        },
      }
    )
  }

  const nextHandler = () => {
    if (paymentOption === "paystack" && appointmentId) {
      handlePayStackPayment?.()
    }
    return
    setStep((prev) => prev + 1)
  }

  const paymentHandler = (params) => {
    setShowPaymentSuccessModal(true)
  }

  const changePaymentMethodHandler = () => {
    setPaymentOption(undefined)
    setStep(1)
  }

  const viewReceiptHandler = () => {
    // setShowPaymentSuccessModal(false);
    setShowPaymentReceiptModal(true)
  }

  const paymentOptionList = React.useMemo(() => {
    return paymentOptions.filter((pay) => {
      // no permission set so available to all
      if (!pay.permissions) return true
      return isFeatureEnabled(pay.permissions)
    })
  }, [])

  return (
    <>
      <div>
        {step === 1 && (
          <>
            <h4 className={styles.heading}>Payment Method</h4>
            <div className={styles.paymentOptionsWrapper}>
              {paymentOptionList?.map((payment) => {
                return (
                  <label className={styles.paymentOption}>
                    {payment?.iconType === "bank" ? (
                      <BankIcon />
                    ) : (
                      <CreditCardIcon type="two" />
                    )}
                    <div className={styles.paymentOptionDetails}>
                      <span className={styles.paymentType}>
                        {payment.label}
                      </span>
                      <span>{payment.description}</span>
                      <span>{payment.subDescription}</span>
                    </div>
                    <div className={styles.radioButton}>
                      <RadioButtons
                        onChange={onSelectPaymentOptionHandler}
                        selectedValue={paymentOption}
                        name="paymentOption"
                        value={payment.value}
                      />
                    </div>
                  </label>
                )
              })}
              {!paymentSuccessState && (
                <div className={styles.btnWrapper}>
                  <Button
                    disabled={
                      !paymentOption ||
                      paymentMutation?.isPending ||
                      verifyPaymentMutation?.isPending
                    }
                    type="button"
                    onClick={nextHandler}
                    variant="contained"
                    fullWidth
                    rounded
                    size="large"
                  >
                    {verifyPaymentMutation?.isPending ||
                    paymentMutation?.isPending ? (
                      <Spinner />
                    ) : (
                      "Next"
                    )}
                  </Button>
                </div>
              )}
            </div>
          </>
        )}
        {step === 2 && paymentOption === "credit_card" && (
          <div>this is the payment</div>
        )}
        {step === 2 && paymentOption === "hmo" && (
          <HmoForm
            changePaymentMethodHandler={changePaymentMethodHandler}
            paymentHandler={paymentHandler}
          />
        )}
      </div>
      <PaymentSuccessModal
        viewReceiptHandler={viewReceiptHandler}
        open={showPaymentSuccessModal}
        receipt={paymentReceiptData}
        cancelHandler={() => setShowPaymentSuccessModal(false)}
      />
      <PaymentReceiptModal
        open={showPaymentReceiptModal}
        receipt={paymentReceiptData}
        cancelHandler={() => setShowPaymentReceiptModal(false)}
      />
    </>
  )
}

const CardPaymentForm = () => {
  return <div>card payments</div>
}

const HmoForm = ({ paymentHandler, changePaymentMethodHandler }) => {
  const onsubmit = (params) => {
    paymentHandler?.(params)
  }
  return (
    <Formik onSubmit={onsubmit} initialValues={{}}>
      {() => {
        return (
          <Form>
            <h4 className={styles.heading}>Pay Via HMO Provider</h4>
            <div className={styles.inputFieldWrapper}>
              <SelectField
                variant="filled"
                label="HMO"
                options={[]}
                placeholder="Select provider"
                onChange={() => {}}
              />
            </div>
            <div className={styles.inputFieldWrapper}>
              <InputField
                placeholder="Enter HMO Membership ID"
                fullWidth
                label="ID"
                variant="filled"
                type="text"
                name="id"
              />
            </div>
            <div className={styles.inputFieldWrapper}>
              <InputField
                placeholder="Enter Registered Name"
                fullWidth
                label="Name"
                variant="filled"
                type="text"
                name="name"
              />
            </div>
            <div className={styles.inputFieldWrapper}>
              <InputField
                placeholder="Enter Phone Number"
                fullWidth
                label="Phone"
                variant="filled"
                type="text"
                name="phone_number"
              />
            </div>
            <div className={styles.inputFieldWrapper}>
              <InputField
                placeholder="Gold"
                fullWidth
                label="Plan"
                variant="filled"
                type="text"
                name="plan"
              />
            </div>
            <div className={styles.formBtnWrapper}>
              <Button type="submit" variant="contained" rounded size="large">
                Pay NGN 26,878.56
              </Button>
              <Button
                type="button"
                onClick={changePaymentMethodHandler}
                className={styles.changePaymentBtn}
                rounded
                size="large"
              >
                Change Payment Method
              </Button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

const paymentOptions = [
  // {
  //   label: "Credit Card",
  //   value: "credit_card",
  //   description: "Pay with MasterCard, Visa or Verve",
  //   subDescription: "MasterCard *****1234",
  //   iconType: "card",
  // },
  {
    label: "HMO Provideer",
    value: "hmo",
    description: "Reliance HMO",
    subDescription: "Red Beryl Lite Individual",
    iconType: "card",
    permissions: ["hmo"],
  },
  // {
  //   label: "Internet Banking",
  //   value: "internet",
  //   description: "Pay directly from your bank account",
  //   iconType: "bank",
  // permissions: ['wallet']
  //
  // },
  {
    label: "Paystack",
    value: "paystack",
    description: "Pay using paystack",
    iconType: "bank",
  },
]

export default PaymentForm
