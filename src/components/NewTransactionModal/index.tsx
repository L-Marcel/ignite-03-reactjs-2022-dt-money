"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as zod from "zod";

import { Icon } from "../Icon";
import { NewTransactionButton, ModalOverlay, ModalContent, ModalTitle, NewTransactionForm, ModalCloseButton, TransactionType, TransactionTypes } from "./styles";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/axios";
import { useQueryClient } from "react-query";
import { useState } from "react";

const NewTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(["income", "outcome"])
});

type NewTransactionFormInputs = zod.infer<typeof NewTransactionFormSchema>;

export function NewTransactionModal() {
  const [isOpen, setIsOpen] = useState(false);

  const queryClient = useQueryClient();

  const { 
    handleSubmit, 
    register, 
    control,
    reset,
    formState: { isSubmitting } 
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(NewTransactionFormSchema),
    defaultValues: {
      type: "income"
    }
  });

  function handleOnOpen() {
    setIsOpen(true);
  }

  function handleOnClose() {
    setIsOpen(false);
  }
  
  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await api.post("/transactions", { 
      ...data, 
      createdAt: new Date().toISOString() 
    });
    
    await queryClient.refetchQueries({
      predicate: (query) => query.queryKey[0] === "dtmoney@transactions"
    }).then(() => {
      setIsOpen(false);
      reset();
    });
  }

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger asChild onClick={handleOnOpen}>
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <ModalOverlay/>
        <ModalContent>
          <ModalTitle>Nova transação</ModalTitle>
          
          <ModalCloseButton onClick={handleOnClose}>
            <Icon name="X" size={24}/>
          </ModalCloseButton>

          <NewTransactionForm onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input 
              type="text" 
              {...register("description")}
              placeholder="Descrição"
            />
            <input 
              type="number" 
              {...register("price", { valueAsNumber: true })}
              placeholder="Preço"
            />
            <input 
              type="text" 
              {...register("category")}
              placeholder="Categoria"
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                const { onChange, value } = field;

                return (
                  <TransactionTypes onValueChange={onChange} value={value}>
                    <TransactionType value="income">
                      <Icon name="ArrowCircleUp" size={24}/>
                      <label>Entrada</label>
                    </TransactionType>
                    <TransactionType value="outcome" $variant="outcome">
                      <Icon name="ArrowCircleDown" size={24}/>
                      <label>Saída</label>
                    </TransactionType>
                  </TransactionTypes>
                );
              }}
            />
            <button type="submit" disabled={isSubmitting}>Cadastrar</button>
          </NewTransactionForm>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}